import {
    Box,
    Stack,
    Button,
    Text,
    useColorModeValue,
    VStack,
    FormControl,
    FormLabel,
    Input,
    Flex,
    Textarea,
    Select,
    SimpleGrid,
    Progress,
    HStack,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    FaUser,
    FaBirthdayCake,
    FaBriefcase,
    FaEnvelope,
} from "react-icons/fa";

const schema = z.object({
    firstName: z.string().min(1, "First Name is required."),
    middleName: z.string().optional(),
    lastName: z.string().min(1, "Last Name is required."),
    dateOfBirth: z.string().min(1, "Date of Birth is required."),
    occupation: z.string().min(1, "Occupation is required."),
    preferredPronoun: z.string().min(1, "Preferred pronoun is required."),
    educationLevel: z.string().min(1, "Education level is required."),
    reasonToJoin: z.string().min(1).max(300, "300 characters max."),
    ideaToTalk: z.string().min(1).max(300, "300 characters max."),
    contactInfo: z.string().min(1).max(300, "300 characters max."),
});

const steps = [
    "Personal Information",
    "Professional Information",
    "Your Ideas",
    "Contact Information",
];

const SpeakerFormEnhanced = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
        reset,
    } = useForm<FieldValues>({
        resolver: zodResolver(schema),
        mode: "onChange",
    });

    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = async () => {
        const stepFields = getFieldsForStep(currentStep);
        const isStepValid = await trigger(stepFields);
        if (!isStepValid) return;
        setCurrentStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const onSubmit = async (data: FieldValues) => {
        const formattedData = {
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
            reasonToJoin: data.reasonToJoin,
            ideaToTalk: data.ideaToTalk,
            contactInfo: data.contactInfo,
            dateOfBirth: data.dateOfBirth,
            preferredPronoun: data.preferredPronoun,
            educationLevel: data.educationLevel,
            occupation: data.occupation,
        };

        try {
            const response = await fetch("https://formcarry.com/s/3UW9a0FlOMR", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formattedData),
            });

            const result = await response.json();

            if (response.status === 200) {
                toast.success("We received your submission, thank you!");
                reset();
                window.scrollTo(0, 0);
            } else if (response.status === 422) {
                toast.error(result.message);
            } else {
                toast.error("Error submitting form: " + result.message);
            }
        } catch (error: unknown) {
            let errorMessage = "An unknown error occurred";

            if (error instanceof Error) {
                errorMessage = error.message;
            } else if (typeof error === "string") {
                errorMessage = error;
            }

            console.error("Error submitting form:", error);
            toast.error("Error submitting form: " + errorMessage);
        }
    };

    const getFieldsForStep = (step: number): string[] => {
        switch (step) {
            case 0:
                return ["firstName", "middleName", "lastName", "dateOfBirth"];
            case 1:
                return ["occupation", "preferredPronoun", "educationLevel"];
            case 2:
                return ["reasonToJoin", "ideaToTalk"];
            case 3:
                return ["contactInfo"];
            default:
                return [];
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
                bg={useColorModeValue("gray.200", "gray.700")}
                borderRadius="xl"
                padding="6rem"
                maxWidth="60rem"
                marginX="auto"
                boxShadow="2xl"
                minHeight="50rem"
            >
                <VStack spacing={6} align="center">
                    <Text fontSize="5xl" fontWeight="bold" textAlign="center">
                        Speak Your Truth!
                    </Text>
                    <Text fontSize="2xl" textAlign="center">
                        Apply to Speak Today
                    </Text>
                    <HStack spacing={4}>
                        {steps.map((step, index) => (
                            <Flex
                                key={index}
                                align="center"
                                justify="center"
                                width="3.5rem"
                                height="3.5rem"
                                borderRadius="full"
                                bg={
                                    currentStep === index
                                        ? "purple.600"
                                        : currentStep > index
                                            ? "green.500"
                                            : "gray.400"
                                }
                                color="white"
                                fontSize="xl"
                                fontWeight="bold"
                            >
                                {index + 1}
                            </Flex>
                        ))}
                    </HStack>
                    <Progress
                        value={(currentStep / (steps.length - 1)) * 100}
                        size="lg"
                        colorScheme="purple"
                        width="100%"
                    />
                </VStack>

                <Box marginTop="5rem">
                    {currentStep === 0 && (
                        <SimpleGrid columns={1} spacing={6}>
                            <FormControl isInvalid={!!errors.firstName} isRequired>
                                <FormLabel fontSize="xl">First Name</FormLabel>
                                <HStack>
                                    <FaUser size="20px" />
                                    <Input
                                        {...register("firstName")}
                                        placeholder="First Name"
                                        fontSize="lg"
                                        padding="1rem"
                                    />
                                </HStack>
                                {errors.firstName?.message && (
                                    <Text color="red.500" fontSize="md">
                                        {typeof errors.firstName?.message === "string" && errors.firstName.message}
                                    </Text>

                                )}
                            </FormControl>

                            <FormControl>
                                <FormLabel fontSize="xl">Middle Name</FormLabel>
                                <Input
                                    {...register("middleName")}
                                    placeholder="Middle Name"
                                    fontSize="lg"
                                    padding="1rem"
                                />
                            </FormControl>

                            <FormControl isInvalid={!!errors.lastName} isRequired>
                                <FormLabel fontSize="xl">Last Name</FormLabel>
                                <HStack>
                                    <FaUser size="20px" />
                                    <Input
                                        {...register("lastName")}
                                        placeholder="Last Name"
                                        fontSize="lg"
                                        padding="1rem"
                                    />
                                </HStack>
                                {errors.lastName?.message && (
                                    <Text color="red.500" fontSize="md">
                                        {typeof errors.lastName?.message === "string" && errors.lastName.message}
                                    </Text>

                                )}
                            </FormControl>

                            <FormControl isInvalid={!!errors.dateOfBirth} isRequired>
                                <FormLabel fontSize="xl">Date of Birth</FormLabel>
                                <HStack>
                                    <FaBirthdayCake size="20px" />
                                    <Input
                                        type="date"
                                        {...register("dateOfBirth")}
                                        fontSize="lg"
                                        padding="1rem"
                                    />
                                </HStack>
                                {errors.dateOfBirth?.message && (
                                    <Text color="red.500" fontSize="md">
                                        {typeof errors.dateOfBirth?.message === "string" && errors.dateOfBirth.message}
                                    </Text>

                                )}
                            </FormControl>
                        </SimpleGrid>
                    )}

                    {currentStep === 1 && (
                        <SimpleGrid columns={1} spacing={6}>
                            <FormControl isInvalid={!!errors.occupation} isRequired>
                                <FormLabel fontSize="xl">Occupation</FormLabel>
                                <HStack>
                                    <FaBriefcase size="20px" />
                                    <Input
                                        {...register("occupation")}
                                        placeholder="Occupation"
                                        fontSize="lg"
                                        padding="1rem"
                                    />
                                </HStack>
                                {errors.occupation?.message && (
                                    <Text color="red.500" fontSize="md">
                                        {typeof errors.occupation?.message === "string" && errors.occupation.message}
                                    </Text>
                                )}
                            </FormControl>

                            <FormControl isInvalid={!!errors.preferredPronoun} isRequired>
                                <FormLabel fontSize="xl">Preferred Pronoun</FormLabel>
                                <Select {...register("preferredPronoun")} fontSize="lg">
                                    <option value="She/Her">She/Her</option>
                                    <option value="He/Him">He/Him</option>
                                    <option value="They/Them">They/Them</option>
                                </Select>
                            </FormControl>

                            <FormControl isInvalid={!!errors.educationLevel} isRequired>
                                <FormLabel fontSize="xl">Education Level</FormLabel>
                                <Select {...register("educationLevel")} fontSize="lg">
                                    <option value="Bachelors">Bachelors</option>
                                    <option value="Masters">Masters</option>
                                    <option value="PhD">PhD</option>
                                </Select>
                            </FormControl>
                        </SimpleGrid>
                    )}

                    {currentStep === 2 && (
                        <SimpleGrid columns={1} spacing={6}>
                            <FormControl isInvalid={!!errors.reasonToJoin} isRequired>
                                <FormLabel fontSize="xl">Why do you want to join?</FormLabel>
                                <Textarea
                                    {...register("reasonToJoin")}
                                    placeholder="Your reason to join..."
                                    fontSize="lg"
                                    padding="1rem"
                                />
                            </FormControl>

                            <FormControl isInvalid={!!errors.ideaToTalk} isRequired>
                                <FormLabel fontSize="xl">Your Idea to Talk</FormLabel>
                                <Textarea
                                    {...register("ideaToTalk")}
                                    placeholder="Your idea to talk about..."
                                    fontSize="lg"
                                    padding="1rem"
                                />
                            </FormControl>
                        </SimpleGrid>
                    )}

                    {currentStep === 3 && (
                        <FormControl isInvalid={!!errors.contactInfo} isRequired>
                            <FormLabel fontSize="xl">Contact Information</FormLabel>
                            <HStack>
                                <FaEnvelope size="20px" />
                                <Textarea
                                    {...register("contactInfo")}
                                    placeholder="How can we contact you?"
                                    fontSize="lg"
                                    padding="1rem"
                                />
                            </HStack>
                        </FormControl>
                    )}
                </Box>

                <Flex justifyContent="space-between" marginTop={8}>
                    <Button
                        onClick={prevStep}
                        isDisabled={currentStep === 0}
                        variant="outline"
                        size="lg"
                    >
                        Previous
                    </Button>
                    {currentStep < steps.length - 1 ? (
                        <Button onClick={nextStep} colorScheme="blue" size="lg">
                            Next
                        </Button>
                    ) : (
                        <Button type="submit" colorScheme="green" size="lg">
                            Submit
                        </Button>
                    )}
                </Flex>
            </Stack>
            <ToastContainer />
        </form>
    );
};

export default SpeakerFormEnhanced;
