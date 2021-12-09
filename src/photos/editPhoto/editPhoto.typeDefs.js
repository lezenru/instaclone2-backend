import {gql} from "apollo-server";

export default gql`

    type EditPhotoResult {
        ok: Boolean!
        error: String
    }
    
    type Mutation {
        editPhoto(id:Int! , caption: String!): EditPhotoResult!
    }
    
   
`;

//null 을 리턴받아도 되지만 직접 결과타입을 만드는것이 좋아보임
