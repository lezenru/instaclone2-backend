import client from "../client";

//await 는 알아서 해주는중
export default {
    User: {
        //root는 리퀘스트된 유저임
        totalFollowing: ({id}) =>
            client.user.count({
                where: {
                    followers: {
                        some: {
                            id,
                        }
                    }
                }
            }),

        totalFollowers: ({id}) =>
            client.user.count({
                where: {
                    following: {
                        some: {
                            id,
                    }
                }
            }
        }),

        isMe: ({id}, _, {loggedInUser}) => {
            if (!loggedInUser){
                return false;
            }

            return id===loggedInUser.id;
        },

        isFollowing: async ({id}, _, {loggedInUser}) => {
            if (!loggedInUser){
                return false;
            }

            //아래와 같은 결과물, 다른 방법임
/*            const exists = await client.user
                .findUnique({ where: {username: loggedInUser.username}})
                .following({
                    where: {
                        id,
                    },
                });

                 return exists.length !== 0;

                */

            const exists = await client.user.count({
                where: {
                    username: loggedInUser.username,
                    following: {
                        some: {id},
                    },
                }
            });

            return Boolean(exists);






        },

        photos: ({id}) => {
            client.user.findUnique({
                where: {id}
            }).photos()
        }



    }//end of User
}//end of export