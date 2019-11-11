import { gql } from 'apollo-boost';

export default gql`
  {
    destinations {
      id
      name
    }
  }
`;