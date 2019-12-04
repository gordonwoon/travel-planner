import { gql } from 'apollo-boost';

export default gql`
{
  destinations {
    id
    name
    places {
      name
      address
      place_id
    }
  }
}
`;
