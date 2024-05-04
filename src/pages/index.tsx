import {
  Box,
  Card,
  Divider,
  Flex,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  UnorderedList,
} from '@chakra-ui/react'
import Head from 'next/head'
const subHeadingProps = {
  color: 'primary.nutmeg',
  fontSize: '2xl',
}
export default function Page() {
  return (
    <Box>
      <Head>
        <title>Simple Omelette Recipe</title>
      </Head>
      <Flex
        as="main"
        minH={'100vh'}
        alignItems={'center'}
        justifyContent={'center'}
        bg={'neutral.eggshell'}
      >
        <Card
          color={'neutral.darkCharcoal'}
          bg={'white'}
          p={{ md: 8 }}
          my={{
            md: 16,
          }}
          maxWidth={'3xl'}
          borderRadius={'2xl'}
          overflow={'hidden'}
        >
          <Image
            src="/assets/images/image-omelette.jpeg"
            alt="Omelette"
            borderRadius={{ md: 'xl' }}
            overflow={'hidden'}
          />
          <Stack
            p={{ base: 8, md: 0 }}
            mt={{
              md: 8,
            }}
            spacing={8}
          >
            <Heading as="h1" color={'black'}>
              Simple Omelette Recipe
            </Heading>
            <Text>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </Text>
            <Card
              p={6}
              bg={'neutral.roseWhite'}
              as={Stack}
              spacing={4}
              boxShadow={'none'}
            >
              <Text fontWeight={'bold'} fontSize={'lg'}>
                Preparation time
              </Text>
              <UnorderedList pl={3} spacing={1}>
                {preparationItems.map((item, index) => (
                  <ListItem key={index}>
                    <Text as="span" fontWeight={'semibold'}>
                      {item.title}:{' '}
                    </Text>
                    {item.value}
                  </ListItem>
                ))}
              </UnorderedList>
            </Card>
            <Stack spacing={4}>
              <Heading {...subHeadingProps}>Ingredients</Heading>
              <UnorderedList pl={3} spacing={1}>
                {ingredientItems.map((item, index) => (
                  <ListItem pl={3} key={index}>
                    {item}
                  </ListItem>
                ))}
              </UnorderedList>
            </Stack>

            <Divider />
            <Stack spacing={4}>
              <Heading {...subHeadingProps}>Instruction</Heading>
              <OrderedList spacing={1} pl={3}>
                {instructionItems.map((item, index) => (
                  <ListItem
                    key={index}
                    pl={3}
                    fontWeight={'bold'}
                    color={'primary.nutmeg'}
                  >
                    <Text color={'neutral.darkCharcoal'}>
                      {item.title}:{' '}
                      <Text as="span" fontWeight={'normal'}>
                        {item.value}
                      </Text>
                    </Text>
                  </ListItem>
                ))}
              </OrderedList>
            </Stack>
            <Divider />
            <Stack spacing={4}>
              <Heading {...subHeadingProps}>Nutrition</Heading>
              <Text>
                The table below shows nutritional values per serving without the
                additional fillings.
              </Text>
              <TableContainer>
                <Table variant="simple">
                  <Tbody>
                    {nutritionItems.map((item, index) => (
                      <Tr key={index}>
                        <Td>{item.title}</Td>
                        <Td color={'primary.nutmeg'} fontWeight={'bold'}>
                          {item.value}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Stack>
          </Stack>
        </Card>
      </Flex>
    </Box>
  )
}

const preparationItems = [
  {
    title: 'Total',
    value: 'Approximately 10 minutes',
  },
  {
    title: 'Preparation',
    value: '5 minutes',
  },
  {
    title: 'Cooking',
    value: '5 minutes',
  },
]
const ingredientItems = [
  '2-3 large eggs',
  'Salt, to taste',
  'Pepper, to taste',
  '1 tablespoon of butter or oil',
  'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
]

const instructionItems = [
  {
    title: 'Beat the eggs',
    value:
      'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
  },
  {
    title: 'Heat the pan',
    value:
      'Place a non-stick frying pan over medium heat and add butter or oil.',
  },
  {
    title: 'Cook the omelette',
    value:
      'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
  },
  {
    title: 'Add fillings (optional)',
    value:
      'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
  },
  {
    title: 'Fold and serve',
    value:
      'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
  },
  {
    title: 'Enjoy',
    value: 'Serve hot, with additional salt and pepper if needed.',
  },
]
const nutritionItems = [
  {
    title: 'Calories',
    value: '277kcal',
  },
  {
    title: 'Carbs',
    value: '0g',
  },
  {
    title: 'Protein',
    value: '20g',
  },
  {
    title: 'Fat',
    value: '22g',
  },
]
