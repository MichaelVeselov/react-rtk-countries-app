import { useNavigate } from 'react-router-dom';

import { useCountries } from './useCountries';

import { List } from '../../components/List';
import { Card } from '../../components/Card';

export const CountryList = () => {
  const navigate = useNavigate();

  const [countries, { status, error }] = useCountries();

  return (
    <>
      {error && <h2>Can not fetch data...</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'received' && (
        <List>
          {countries.map((country) => {
            const countryInfo = {
              img: country.flags.png,
              name: country.name.common,
              info: [
                {
                  title: 'Population',
                  description: country.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: country.region,
                },
                {
                  title: 'Capital',
                  description: country.capital[0],
                },
              ],
            };
            return (
              <Card
                key={country.name.common}
                {...countryInfo}
                onClick={() => {
                  navigate(`/country/${country.ccn3}`);
                }}
              ></Card>
            );
          })}
        </List>
      )}
    </>
  );
};
