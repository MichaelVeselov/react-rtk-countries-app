import { useDetails } from './useDetails';
import { Info } from './Info';

export const CountryDetails = (props) => {
  const { code } = props;

  const [countryInfo, { status, error, currentCountry }] = useDetails(code);

  return (
    <>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info {...countryInfo()} />}
    </>
  );
};
