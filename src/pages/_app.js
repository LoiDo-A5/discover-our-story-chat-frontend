import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { setAxiosDefaultAuthToken, theme } from "../utils/utils";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OneSignal from "react-onesignal";
import Script from "next/script"; // Import next/script for optimized script loading

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAxiosDefaultAuthToken(token);
    }
  }, []);

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAxiosDefaultAuthToken(token);
    }
  }, []);

  useEffect(() => {
    const initializeOneSignal = async () => {
      /* istanbul ignore next */
      if (
        (typeof window.OneSignalDeferred === "function" &&
          !OneSignal.User.PushSubscription.id) ||
        typeof window === "undefined"
      ) {
        return; // Only need to initialize once
      }

      try {
        await OneSignal.init({
          appId: "29bf06a5-aadc-4cc6-8a41-b403c3f87e48", // Thay thế bằng APP ID của bạn
          allowLocalhostAsSecureOrigin: true,
        });

        // Lắng nghe sự kiện thay đổi subscription ID
        OneSignal.User.PushSubscription.addEventListener(
          "change",
          async (change) => {
            if (change.current.id) {
              const subscriptionId = change.current.id;
              await axios.post("/api/registerSignalId", {
                signal_id: subscriptionId,
              });
            }
          }
        );

        // Trường hợp người dùng đã đăng ký nhận thông báo
        const signal_id = OneSignal.User.PushSubscription.id;
        if (signal_id) {
          await axios.post("/api/registerSignalId", { signal_id });
        }
      } catch (err) {
        console.error("OneSignal initialization failed", err);
      }
    };

    initializeOneSignal();
  }, []);
  return (
    <>
      {/* Add the OneSignal SDK script using next/script */}
      <Script
        src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
        strategy="afterInteractive" // Load the script after the page has loaded
      />
      <Provider store={store}>
        <ToastContainer />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
