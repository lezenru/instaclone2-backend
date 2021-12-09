import client from "../../client";

export default {
    Query: {
        seeFollowers: async (_, {username, page}) => {

            const ok = await client.user.findUnique({
                where: {username},
                select: {id: true},
            })

            if (!ok){
                return {
                    ok: false,
                    error: "해당 유저를 찾을 수 없습니다"
                };
            }


            const followers = await client.user
                .findUnique({ where: {username} })
                .followers({
                    take: 5,
                    skip: (page-1)*5
            });


            //수를 셀 때는 count를 사용해라. findMany 같은걸로 다른 정보 다 불러와서
            //Length 로 수를 세는 그런짓은 하면 X 데이터베이스 부담됨
            const totalFollowers = await client.user.count({
                where: {following: {some: {username}}}
            })

            console.log(`totalFollowers:`+totalFollowers);


            return {
                ok:true,
                followers,
                totalPages: Math.ceil(totalFollowers/5),
            }

        }
    }
}