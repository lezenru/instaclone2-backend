import {protectResolver} from "../../users/users.utils";
import client from "../../client";
import {processHashtags} from "../photos.utils";

export default {
    Mutation: {
      editPhoto: protectResolver(
          async (_, {id, caption}, {loggedInUser}) => {
          const oldPhoto = await client.photo.findFirst({
              where: {
                  id,
                  userId: loggedInUser.id,
              },
              include: {
                  hashtags: {
                      select: {
                          hashtag: true,
                      }
                  }
              },
          });

          if (!oldPhoto) {
              return {
                  ok: false,
                  error: "사진을 찾지 못했습니다"
              }
          } // end of if

          const photo = await client.photo.update({
              where: {id,},
              data: {
                  caption,
                  hashtags: {
                      disconnect: oldPhoto.hashtags,
                      connectOrCreate: processHashtags(caption),
                  }
              }
          });

      })
    }
}