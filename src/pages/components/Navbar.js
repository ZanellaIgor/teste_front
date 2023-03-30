import { Flex, Spacer, Box, Text, List, ListItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Flex>
           
            
            <List>
                <Link to='/'>
                    <Text fontWeight='bold'>Home</Text>
                </Link>
                <Link to='/about'>
                    <Text fontWeight='bold'>About</Text>
                </Link>

                <Link to='/Produtos'><ListItem>
                    Lista de Produtos
                </ListItem>
                </Link>
                <ListItem>
                    <Link to='/Produtos/Criar_Produto'>Criar Produto</Link>
                </ListItem>
                <ListItem>
                </ListItem>
                <ListItem>
                    <Link to='/Produtos/Editar_Produto/:id'>Editar Produto</Link>
                </ListItem>
            </List>

        </Flex>
    );
};

export default Navbar;
