import { ReactNode, useState } from "react";
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import frontendURL from '../../static';
function PriceWrapper({ children }: { children: ReactNode }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: "center", lg: "flex-start" }}
            borderColor={useColorModeValue("gray.200", "gray.500")}
            borderRadius={"xl"}
        >
            {children}
        </Box>
    );
}

export default function Pricing() {
    const [message, setMessage] = useState("");
    const handleClick = (e: any) => {
        e.preventDefault();

        try {
            var stripe = Stripe(
                "pk_test_51LpQxaSClQus7pNZ0lQl5OXXTRBljK1u01ZRUMbjpDftwojlCqmFxvfP73P1e1mbE89SXJtifG1zifX8yzBHQvyS00i1h5qv1Q"
            );

            stripe
                .redirectToCheckout({
                    lineItems: [
                        {
                            price: "price_1LqIhhSClQus7pNZnhtG5hU8",
                            quantity: 1,
                        },
                    ],
                    mode: "subscription",
                    successUrl: { frontendURL},
                    cancelUrl: { frontendURL},
                })
                .then(function () {
                    alert("Payment Successful!");
                });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box py={12}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl">
                    Your soulmate is waiting!
                </Heading>
                <Text fontSize="lg" color={"gray.500"}>
                    Start with 14-day free trial. No cpurpleit card needed.
                    Cancel at anytime.
                </Text>
            </VStack>
            <Stack
                direction={{ base: "column", md: "row" }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}
            >
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            Spicy Start
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                ₹
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                79
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                /month
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue("gray.50", "gray.700")}
                        py={4}
                        borderBottomRadius={"xl"}
                    >
                        <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="purple.500"
                                />
                                Unlimited likes
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="purple.500"
                                />
                                Unlimited matches
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="purple.500"
                                />
                                Ad-free experience
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="purple.500"
                                />
                                Basic profile verification
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <Button
                                w="full"
                                colorScheme="purple"
                                variant="outline"
                                onClick={handleClick}
                                id="checkout"
                            >
                                Start trial
                            </Button>
                        </Box>
                    </VStack>
                </PriceWrapper>

                <PriceWrapper>
                    <Box position="relative">
                        <Box
                            position="absolute"
                            top="-16px"
                            left="50%"
                            style={{ transform: "translate(-50%)" }}
                        >
                            <Text
                                textTransform="uppercase"
                                bg={useColorModeValue(
                                    "purple.300",
                                    "purple.700"
                                )}
                                px={3}
                                py={1}
                                color={useColorModeValue(
                                    "gray.900",
                                    "gray.300"
                                )}
                                fontSize="sm"
                                fontWeight="600"
                                rounded="xl"
                            >
                                Most Popular
                            </Text>
                        </Box>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                Flaming Desire
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" fontWeight="600">
                                    ₹
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    149
                                </Text>
                                <Text fontSize="3xl" color="gray.500">
                                    /month
                                </Text>
                            </HStack>
                        </Box>
                        <VStack
                            bg={useColorModeValue("gray.50", "gray.700")}
                            py={4}
                            borderBottomRadius={"xl"}
                        >
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon
                                        as={FaCheckCircle}
                                        color="purple.500"
                                    />
                                    All Basic Plan features
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={FaCheckCircle}
                                        color="purple.500"
                                    />
                                    Premium profile verification
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={FaCheckCircle}
                                        color="purple.500"
                                    />
                                    Boosted profile visibility
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={FaCheckCircle}
                                        color="purple.500"
                                    />
                                    Ability to see who likes your profile
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Button
                                    onClick={handleClick}
                                    id="checkout"
                                    w="full"
                                    colorScheme="purple"
                                >
                                    Start trial
                                </Button>
                            </Box>
                        </VStack>
                    </Box>
                </PriceWrapper>
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            Blazing Love
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                ₹
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                349
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                /month
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue("gray.50", "gray.700")}
                        py={4}
                        borderBottomRadius={"xl"}
                    >
                        <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="purple.500"
                                />
                                All Plus Plan features
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="purple.500"
                                />
                                Personalized matchmaking
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="purple.500"
                                />
                                One-on-one consultation with a matchmaker
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="purple.500"
                                />
                                Exclusive access to premium features and events
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <Button
                                w="full"
                                colorScheme="purple"
                                variant="outline"
                                onClick={handleClick}
                                id="checkout"
                            >
                                Start trial
                            </Button>
                        </Box>
                    </VStack>
                </PriceWrapper>
            </Stack>
        </Box>
    );
}
