import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

function FeaturedGameSkeleton() {
  return (
    <Card maxWidth="80em" borderRadius={10} overflow="hidden">
      <HStack>
        <Skeleton
          height="270px"
          width="430px"
          margin="15px"
          borderRadius={10}
        ></Skeleton>
        <CardBody>
          <SkeletonText noOfLines={8} spacing="4"></SkeletonText>
        </CardBody>
      </HStack>
    </Card>
  );
}

export default FeaturedGameSkeleton;
