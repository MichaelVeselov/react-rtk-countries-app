import { useNavigate, useParams } from 'react-router-dom';

import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { CountryDetails } from '../features/details/CountryDetails';

export const DetailsPage = () => {
  const { code } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      <CountryDetails code={code} />
    </div>
  );
};
