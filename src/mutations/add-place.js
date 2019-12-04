import { gql } from 'apollo-boost';

export default gql`
  mutation AddPlaceToDestination($id: ID!, $place_id: String!, $name: String!, $address: String!, $expense: Float, $type: String, $from_date: Int, $to_date: Int) {
    addPlaceToDestination(destinationId: $id, place_id: $place_id, name: $name, address: $address, expense: $expense, type: $type, from_date: $from_date, to_date: $to_date ) {
      id
      name
    }
  }
`;
