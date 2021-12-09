import {gql} from "apollo-server";

export default gql`
    type User{
        id: String!
        firstName: String!
        lastName: String!
        username: String
        email: String!
        createdAt: String!
        updatedAt: String!   
        
        photos: [Photo]
        
        following: [User]
        followers: [User]
        
        totalFollowing: Int!
        totalFollowers: Int!

        isMe: Boolean!
        isFollowing:Boolean!

    }
        
    
   
    
`;

//
//



/*스키마를 변경할 때는 항상 마이그레이트 해주어야함*/