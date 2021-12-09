import bcrypt from "bcrypt"
import client from "../../client";
import jwt from "jsonwebtoken";

export default {
    Mutation: {

        //로그인
        login: async (_,{username, password}) => {
            const user = await client.user.findUnique({
                where: {username}
            });

            //아이디가 틀렷을 때
            if (!user){
                return{
                    ok: false,
                    error: "해당 아이디를 찾지 못했습니다",
                };
            }

            //비밀번호가 틀렸을 때
            const passwordOk = await bcrypt.compare(password, user.password)
            if(!passwordOk){
                return {
                    ok: false,
                    error: "비밀번호가 틀렸습니다"
                }
            }
            // 토큰 발행 -> 토큰은 누구나 볼 수 있기 때문에 비밀스러운 정보를 넣으면 안됨
            // 토큰의 목적은 다르나람이 보지못하게 하는게 아니라 변경을 하지 못하게 하는것
            const token = await jwt.sign({id:user.id}, process.env.SECRET_KEY);
            console.log("TOKEN : "+token);
            return {
                ok: true,
                token
            }
        }







    } // end of mutation
} // end of export