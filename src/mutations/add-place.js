import { gql } from 'apollo-boost';

export default gql`
  mutation AddPlaceToDestination($id: ID!, $place_id: String!, $name: String!, $address: String! ) {
    addPlaceToDestination(destinationId: $id, place_id: $place_id, name: $name, address: $address) {
      id
      name
    }
  }
`;
