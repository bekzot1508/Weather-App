import React from 'react'
import { Stack } from '@mui/system';
import { category } from '../constants';
import { colors } from '../constants/colores'

const Category = ({ selectedCategoryhandler, selectedCategory }) => {
  return (
    <Stack direction={'row'} sx={{ overflow: 'scroll'}}>
        {category.map(item => (
            <button key={item.name} className="category-btn" style={{ borderRadius: ' 0 ', color: item.name === selectedCategory && 'fff', background: item.name === selectedCategory && colors.secondary  }} onClick={() => selectedCategoryhandler(item.name)}>
                <span style={{ marginRight:'15px' }}>{item.icon}</span>
                <span style={{opacity: '1'}}>{item.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Category ;