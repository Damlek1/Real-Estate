import {Box} from '@chakra-ui/react'

const Footer = () => (
    <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
        &copy; {new Date().getFullYear()} Realtor, Inc
    </Box>
)


export default Footer