import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map(skeleton => (
          <ListItem key={skeleton} paddingY={5}>
            <SkeletonText noOfLines={2} width={20} />
          </ListItem>
        ))}
      {data.map(genre => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              variant="link"
              fontSize="lg"
              fontWeight={genre.id == selectedGenre?.id ? 'bold' : 'normal'}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
