import client from "../../client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {protectResolver} from "../users.utils";


const resolverFn = async (_, {firstName, lastName, username, email, password: newPassword}, {loggedInUser, protectResolver}) => {

    //세번째는 서버의 context 내용물임.
    let uglyPassword = null;
    if (newPassword) {
        uglyPassword = await bcrypt.hash(newPassword, 10);
    };

    //await 꼭 넣어주삼
    const updatedUser = await client.user.update({
        where: {
            id: loggedInUser.id,
        },
        data: {
            firstName,
            lastName,
            username,
            email,
            ...(uglyPassword && {password: uglyPassword}),
            // uglyPassword 가 있으면 {} 를 실행함 을 더 줄이면? ...는 대괄호를 없애는 역할

        }
    })

    if (updatedUser.id){
        return { ok:true };
    } else {
        return { ok:false, error:"프로필 업데이트에 실패하였습니다"};
    }
}

export default {
    Mutation: {
        editProfile: protectResolver(resolverFn) //end of editProfile
    }
}