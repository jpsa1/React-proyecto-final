import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import CategoryIcon from '@mui/icons-material/Category';
import ClassIcon from '@mui/icons-material/Class';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useNavigate } from 'react-router-dom';


export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');
  const navigate = useNavigate()

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    switch (newValue) {
      case 'celulares':
        navigate('category/celulares');
        break;
      case 'remeras':
        navigate('category/remeras');
        break;
      case 'calzado':
        navigate('category/calzado');
        break;
      case 'electrodomesticos':
        navigate('category/electrodomesticos');
        break;

      default:
        break;
    }
    
    
    console.log('newValue: ' + newValue)
  };

  return (
    <BottomNavigation sx={{ width: 'auto' }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Celulares"
        value="celulares"
        icon={<CategoryIcon />}
      />
      <BottomNavigationAction
        label="Remeras"
        value="remeras"
        icon={<ClassIcon />}
      />
      <BottomNavigationAction
        label="Calzado"
        value="calzado"
        icon={<AutoAwesomeMosaicIcon />}
      />
      <BottomNavigationAction 
        label="Electrodomesticos" 
        value="electrodomesticos" 
        icon={<BookmarkIcon />} />
      </BottomNavigation>
  );
}