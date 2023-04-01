import { Flex, Spacer, Box, Text, List, ListItem, background } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import theme from '../../styles/theme';

const navItens = [
    { id: 1, name: 'Home', icon: '', link: '/', },
    { id: 2, name: 'Criar Produtos', icon: '', link: '/Produtos/Criar_Produto' },
    { id: 3, name: 'Lista de Produtos', icon: '', link: '/Produtos' },
    { id: 4, name: 'Grafico', icon: '', link: 'cu', },
    { id: 5, name: 'About', icon: '', link: '/About', },
    { id: 6, name: 'Sair', icon: '', link: "", },
];

const Navbar = () => {
    return (
        <Flex

        >
            <List variant="customStyle">
                {navItens.map((navIten) => (
                    <Link to={navIten.link}>
                        <ListItem key={navIten.id}
                            align="left"
                            borderBottom='1px solid black'
                            cursor="pointer"
                            _hover={{
                                bg: 'cyan.400',
                                color: 'white',
                                borderRadius: "lg",
                            }}>
                            {navIten.name}
                        </ListItem>
                    </Link>

                ))}
            </List>

        </Flex >
    );
};

export default Navbar;
