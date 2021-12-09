import {gql} from "apollo-server";

export default gql`
    
    type CreateAccountResult {
        ok: Boolean!
        error: String
    }
    
    type Mutation {
        createAccount(
            firstName: String!
            lastName: String!
            username: String
            email: String!
            password: String!
        ): CreateAccountResult
    }
`;

/*스키마를 변경할 때는 항상 마이그레이트 해주어야함*/