import {protectResolver} from "../../users/users.utils";
import client from "../../client";
import {processHashtags} from "../photos.utils";

export default {
    Mutation: {
        uploadPhoto: protectResolver(async (_, {file, caption}, {loggedInUser}) => {

            let hashtagObj = [];

            if (caption){
                hashtagObj = processHashtags(caption);
            }

            console.log(hashtagObj)

            return client.photo.create({
                data: {
                    file,
                    caption, //해쉬태그 길이가 0 이상이면 && 뒤를 반환
                    user: {
                        connect: {
                            id: loggedInUser.id
                        }
                    },
                    ...(hashtagObj.length > 0 && {
                        hashtags: {
                            connectOrCreate: hashtagObj
                        },
                    })
                }
            })


        })//end of uploadPhoto
    }
}