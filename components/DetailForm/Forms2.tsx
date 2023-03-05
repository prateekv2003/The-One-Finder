"use client";
import React, { useState } from "react";
import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,
    GridItem,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
    RadioGroup,
    Radio,
    HStack,
    Avatar,
    AvatarBadge,
    Center,
    IconButton,
    Stack,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";

const Form1 = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const [form1Data, setForm1Data] = useState({});
    const handleChange = (e: any) => {
        setForm1Data({ ...form1Data, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(form1Data);
    };

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInputChange = (event: any) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleSubmitFile = () => {
        // TODO: Handle file upload and processing using the selected file
        console.log(selectedFile);
    };

    return (
        <>
            <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
                About You
            </Heading>
            <div className="space-y-2">
                <FormControl id="userName">
                    <FormLabel>User Icon</FormLabel>
                    <Stack direction={["column", "row"]} spacing={6}>
                        <Center>
                            <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                                <AvatarBadge
                                    as={IconButton}
                                    size="sm"
                                    rounded="full"
                                    top="-10px"
                                    colorScheme="red"
                                    aria-label="remove Image"
                                    icon={<SmallCloseIcon />}
                                />
                            </Avatar>
                        </Center>
                        <Center w="full">
                            <input
                                type="file"
                                onChange={handleFileInputChange}
                            />
                            <Button onClick={handleSubmitFile}>Upload</Button>
                        </Center>
                    </Stack>
                </FormControl>
                <Flex>
                    <FormControl mr="5%">
                        <FormLabel htmlFor="first-name">First name</FormLabel>
                        <Input
                            id="first-name"
                            name="first-name"
                            placeholder="First name"
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="last-name">Last name</FormLabel>
                        <Input
                            id="last-name"
                            name="last-name"
                            placeholder="First name"
                            onChange={handleChange}
                        />
                    </FormControl>
                </Flex>

                <FormControl mt="2%">
                    <FormLabel htmlFor="dob">Date of Birth</FormLabel>
                    <Input
                        id="dob"
                        type="date"
                        name="dob"
                        onChange={handleChange}
                    />
                    {/* <FormHelperText>We'll never share your dob.</FormHelperText> */}
                </FormControl>

                {/* <FormControl>
                    <FormLabel htmlFor="password"  mt="2%">
                        Password
                    </FormLabel>
                    <InputGroup size="md">
                        <Input
                            pr="4.5rem"
                            type={show ? "text" : "password"}
                            placeholder="Enter password"
                            onChange={handleChange}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl> */}

                <FormControl mt="2%">
                    <FormLabel htmlFor="dob">Bio</FormLabel>
                    <Textarea
                        name="bio"
                        id="bio"
                        onChange={handleChange}
                        placeholder="Traveller, Romance.."
                        size="sm"
                    />
                    {/* <Input id="bio" type="text" /> */}
                    <FormHelperText>
                        Bio helps in better matches!
                    </FormHelperText>
                </FormControl>

                <FormControl as="fieldset">
                    <FormLabel htmlFor="gender">Gender</FormLabel>
                    <RadioGroup defaultValue="Male">
                        <HStack spacing="24px">
                            <Radio
                                value="Male"
                                name="gender"
                                onChange={handleChange}
                            >
                                Male
                            </Radio>
                            <Radio
                                value="Female"
                                name="gender"
                                onChange={handleChange}
                            >
                                Female
                            </Radio>
                            <Radio
                                value="Non-Binary"
                                name="gender"
                                onChange={handleChange}
                            >
                                Non-Binary
                            </Radio>
                            <Radio
                                value="Other"
                                name="gender"
                                onChange={handleChange}
                            >
                                Other
                            </Radio>
                        </HStack>
                    </RadioGroup>
                </FormControl>

                <Flex>
                    <FormControl mr="5%">
                        <FormLabel htmlFor="habit-drink">Habit Drink</FormLabel>
                        <Input
                            name="habit-drink"
                            id="habit-drink"
                            type="checkbox"
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="habit-smoke">Habit Smoke</FormLabel>
                        <Input
                            name="habit-smoke"
                            id="habit-smoke"
                            type="checkbox"
                            onChange={handleChange}
                        />
                    </FormControl>
                </Flex>
            </div>
        </>
    );
};

const Form2 = () => {
    return (
        <>
            <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
                Your Photos
            </Heading>
            <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                    htmlFor="country"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: "gray.50",
                    }}
                >
                    Country / Region
                </FormLabel>
                <Select
                    id="country"
                    name="country"
                    autoComplete="country"
                    placeholder="Select option"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                </Select>
            </FormControl>

            <FormControl as={GridItem} colSpan={6}>
                <FormLabel
                    htmlFor="street_address"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: "gray.50",
                    }}
                    mt="2%"
                >
                    Street address
                </FormLabel>
                <Input
                    type="text"
                    name="street_address"
                    id="street_address"
                    autoComplete="street-address"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                <FormLabel
                    htmlFor="city"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: "gray.50",
                    }}
                    mt="2%"
                >
                    City
                </FormLabel>
                <Input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="city"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                    htmlFor="state"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: "gray.50",
                    }}
                    mt="2%"
                >
                    State / Province
                </FormLabel>
                <Input
                    type="text"
                    name="state"
                    id="state"
                    autoComplete="state"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                    htmlFor="postal_code"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: "gray.50",
                    }}
                    mt="2%"
                >
                    ZIP / Postal
                </FormLabel>
                <Input
                    type="text"
                    name="postal_code"
                    id="postal_code"
                    autoComplete="postal-code"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                />
            </FormControl>
        </>
    );
};

const Form3 = () => {
    return (
        <>
            <Heading w="100%" textAlign={"center"} fontWeight="normal">
                What you lookin' for?
            </Heading>
            <SimpleGrid columns={1} spacing={6}>
                <FormControl as={GridItem} colSpan={[3, 2]}>
                    <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                            color: "gray.50",
                        }}
                    >
                        Website
                    </FormLabel>
                    <InputGroup size="sm">
                        <InputLeftAddon
                            bg="gray.50"
                            _dark={{
                                bg: "gray.800",
                            }}
                            color="gray.500"
                            rounded="md"
                        >
                            http://
                        </InputLeftAddon>
                        <Input
                            type="tel"
                            placeholder="www.example.com"
                            focusBorderColor="brand.400"
                            rounded="md"
                        />
                    </InputGroup>
                </FormControl>

                <FormControl id="dob" mt={1}>
                    <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                            color: "gray.50",
                        }}
                    >
                        About
                    </FormLabel>
                    <Textarea
                        placeholder="you@example.com"
                        rows={3}
                        shadow="sm"
                        focusBorderColor="brand.400"
                        fontSize={{
                            sm: "sm",
                        }}
                    />
                    <FormHelperText>
                        Brief description for your profile. URLs are
                        hyperlinked.
                    </FormHelperText>
                </FormControl>
            </SimpleGrid>
        </>
    );
};

export default function Forms() {
    const toast = useToast();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(33.33);
    return (
        <>
            <Box
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                maxWidth={800}
                p={6}
                m="10px auto"
                as="form"
            >
                <Progress
                    hasStripe
                    value={progress}
                    mb="5%"
                    mx="5%"
                    isAnimated
                ></Progress>
                {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
                <ButtonGroup mt="5%" w="100%">
                    <Flex w="100%" justifyContent="space-between">
                        <Flex>
                            <Button
                                onClick={() => {
                                    setStep(step - 1);
                                    setProgress(progress - 33.33);
                                }}
                                isDisabled={step === 1}
                                colorScheme="teal"
                                variant="solid"
                                w="7rem"
                                mr="5%"
                            >
                                Back
                            </Button>
                            <Button
                                w="7rem"
                                isDisabled={step === 3}
                                onClick={() => {
                                    // handleSubmit();
                                    setStep(step + 1);
                                    if (step === 3) {
                                        setProgress(100);
                                    } else {
                                        setProgress(progress + 33.33);
                                    }
                                }}
                                colorScheme="teal"
                                variant="outline"
                            >
                                Next
                            </Button>
                        </Flex>
                        {step === 3 ? (
                            <Button
                                w="7rem"
                                colorScheme="red"
                                variant="solid"
                                onClick={() => {
                                    toast({
                                        title: "Account created.",
                                        description:
                                            "We've created your account for you.",
                                        status: "success",
                                        duration: 3000,
                                        isClosable: true,
                                    });
                                }}
                            >
                                Submit
                            </Button>
                        ) : null}
                    </Flex>
                </ButtonGroup>
            </Box>
        </>
    );
}
