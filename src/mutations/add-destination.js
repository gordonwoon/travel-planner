import { gql } from 'apollo-boost';

export default gql`
  mutation AddDestination($name: String!) {
    addDestination(name: $name) {
      id
      name
    }
  }
`;
