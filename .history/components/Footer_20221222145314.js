import { Box } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/layout';

const Footer = () => (
  <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
    © {new Date().getFullYear()} Samson Real Estate by <Link href='/' paddingLeft='2'>Realtor</Link>.
  </Box>
);

export default Footer;