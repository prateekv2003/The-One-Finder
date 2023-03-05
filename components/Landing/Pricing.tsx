import { ReactNode, useState, useEffect } from "react";
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
import { frontendURL } from "../../static";

function PriceWrapper({ children }: { children: ReactNode }) {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://js.stripe.com/v3/";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
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
    const handleClick = () => {
        // e.preventDefault();

        try {
            const stripe = Stripe(
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
                    successUrl: frontendURL,
                    cancelUrl: frontendURL,
                })
                .then(function () {
                    alert("Payment Successful!");
                });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box id="pricing" py={12}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl">
                    Your soulmate is waiting!
                </Heading>
                <Text fontSize="lg" color={"gray.500"}>
                    Start with 14-day free trial. No credit card needed. Cancel
                    at anytime.
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
                                129
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
                                    color="rgb(217 70 239)"
                                />
                                Unlimited likes
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="rgb(217 70 239)"
                                />
                                Unlimited matches
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="rgb(217 70 239)"
                                />
                                Ad-free experience
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="rgb(217 70 239)"
                                />
                                Basic profile verification
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <button
                                onClick={handleClick}
                                id="checkout"
                                className="w-full px-4 py-2 text-sm font-medium leading-5 text-black transition-colors duration-150 border-2 border-fuchsia-500 rounded-lg hover:bg-fuchsia-300 focus:outline-none focus:shadow-outline-fuchsia"
                            >
                                Start trial
                            </button>
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
                                        color="rgb(217 70 239)"
                                    />
                                    All Basic Plan features
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={FaCheckCircle}
                                        color="rgb(217 70 239)"
                                    />
                                    Premium profile verification
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={FaCheckCircle}
                                        color="rgb(217 70 239)"
                                    />
                                    Boosted profile visibility
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={FaCheckCircle}
                                        color="rgb(217 70 239)"
                                    />
                                    Ability to see who likes your profile
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <button
                                    onClick={handleClick}
                                    id="checkout"
                                    className="w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-fuchsia-500 border border-transparent rounded-lg active:bg-fuchsia-500 hover:bg-fuchsia-700 focus:outline-none focus:shadow-outline-fuchsia"
                                >
                                    Start trial
                                </button>
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
                                499
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
                                    color="rgb(217 70 239)"
                                />
                                All Plus Plan features
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="rgb(217 70 239)"
                                />
                                Personalized matchmaking
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="rgb(217 70 239)"
                                />
                                One-on-one consultation with a matchmaker
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="rgb(217 70 239)"
                                />
                                Exclusive access to premium features and events
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <button
                                onClick={handleClick}
                                id="checkout"
                                className="w-full px-4 py-2 text-sm font-medium leading-5 text-black transition-colors duration-150 border-2 border-fuchsia-500 rounded-lg hover:bg-fuchsia-300 focus:outline-none focus:shadow-outline-fuchsia"
                            >
                                Start trial
                            </button>
                        </Box>
                    </VStack>
                </PriceWrapper>
            </Stack>
        </Box>
    );
}
