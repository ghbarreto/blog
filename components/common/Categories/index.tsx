import { useContext, useState } from 'react';
import { PostContext } from '../../../context/PostContext';
import _ from 'lodash';
import * as Global from '../../../styles';
import * as Local from './styles';
import * as utilities from '../../../styles/utilities';

const Category: React.FC = () => {
  const [hover, setHover] = useState<Number | null>();
  const { retrieveCategory, selectCategory, selectedCategory } =
    useContext(PostContext);
  const uniqueValues = _.uniqWith(
    retrieveCategory(),
    (a: string, b: string) => a.toLowerCase() === b.toLowerCase()
  );

  return (
    <Local.Container>
      {_.map(uniqueValues, (categories: string, index) => (
        <Global.Button
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(null)}
          id={`${index}`}
          padding={'15px'}
          paddingLeft={'15px'}
          bgColor={
            selectedCategory === categories || hover === index
              ? utilities.lightblue
              : 'transparent'
          }
          onClick={() => selectCategory(categories)}
          fontSize={'25px'}
          maxWidth={'200px'}
          margin={'0 auto'}
          marginTop={'20px'}
          hoverBg={index === hover ? utilities.lightblue : 'transparent'}
          color={
            index === hover || selectedCategory === categories
              ? utilities.bgColor
              : undefined
          }
        >
          <Global.Tags
            primary={
              index === hover || selectedCategory === categories ? false : true
            }
            fontSize={'25px'}
          >
            {'{'}
          </Global.Tags>
          {categories}
          <Global.Tags
            primary={
              index === hover || selectedCategory === categories ? false : true
            }
            fontSize={'25px'}
          >
            {'}'}
          </Global.Tags>
        </Global.Button>
      ))}
    </Local.Container>
  );
};

export default Category;
