import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card maxWidth="80em" borderRadius={10} overflow="hidden">
      <Skeleton height="190px"></Skeleton>
      <CardBody>
        <SkeletonText height="110px"></SkeletonText>
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
