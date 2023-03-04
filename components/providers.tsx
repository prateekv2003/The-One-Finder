"use client";
import * as React from "react";
import AppProvider from "../context/AppContext";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProvider>
      <AnimatePresence>
        <ChakraProvider>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{
              delay: 0.5,
              ease: "easeInOut",
            }}
          >
            {children}
          </motion.div>
        </ChakraProvider>
      </AnimatePresence>
    </AppProvider>
  );
};

export default Providers;
