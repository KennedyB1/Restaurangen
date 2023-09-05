import { faCopy, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ContactInformations = () => {
  const phoneNumber = '0123456789';
  const email = 'ham@burger.now';
  const location = 'Hamburger 4, 123 45';
  const locationLink = 'https://goo.gl/maps/Nc1ZiMwNBjUfYUv36';

  const copyToClipboard = (content: string) => {
    const tempInput = document.createElement('input');
    tempInput.value = content;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  };

  return (
    <>
    <span>Kontaktinformation</span>
      <ul>
        <li>
          <a href={"tel:" + phoneNumber}>
          <FontAwesomeIcon icon={faPhone} /> 
          {phoneNumber}
          </a>
          <span
            onClick={() => {
              copyToClipboard(phoneNumber);
            }}
            style={{ cursor: 'pointer' }}
          >
            <FontAwesomeIcon icon={faCopy} />
          </span>
        </li>
        <li>
          <a href={"mailto:" + email}>
          <FontAwesomeIcon icon={faEnvelope} />
           {email}
          </a>
          <span
            onClick={() => {
              copyToClipboard(email);
            }}
            style={{ cursor: 'pointer' }}
          >
            <FontAwesomeIcon icon={faCopy} />
          </span>
        </li>
        <li>
          <a href={locationLink}>
          <FontAwesomeIcon icon={faLocationDot} />
           {location}
          </a>
          <span
            onClick={() => {
              copyToClipboard(location);
            }}
            style={{ cursor: 'pointer' }}
          >
            <FontAwesomeIcon icon={faCopy} />
          </span>
        </li>
      </ul>
    </>
  );
};
