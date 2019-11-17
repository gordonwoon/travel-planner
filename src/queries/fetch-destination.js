import { gql } from 'apollo-boost';

export default gql`
query destinationQuery ($id: ID!) {
  destination(id: $id) {
    id
    name
    places {
      id
      place_id
      name
      address
      from_date
      to_date
      expense
      type
      waypoint
    }
  }
}
`;
