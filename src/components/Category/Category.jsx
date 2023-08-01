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
      case 'esquinero':
        navigate('category/esquinero');
        break;
      case 'dos-cuerpos':
        navigate('category/dos-cuerpos');
        break;
      case 'matera':
        navigate('category/matera');
        break;
      case 'sofa':
        navigate('category/sofa');
        break;

      default:
        break;
    }
    
    
  };

  return (
    <BottomNavigation sx={{ width: 'auto' }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Esquinero"
        value="esquinero"
        icon={<CategoryIcon />}
      />
      <BottomNavigationAction
        label="Dos Cuerpos"
        value="dos-cuerpos"
        icon={<ClassIcon />}
      />
      <BottomNavigationAction
        label="Matera"
        value="matera"
        icon={<AutoAwesomeMosaicIcon />}
      />
      <BottomNavigationAction 
        label="Sofa" 
        value="sofa" 
        icon={<BookmarkIcon />} />
      </BottomNavigation>
  );
}