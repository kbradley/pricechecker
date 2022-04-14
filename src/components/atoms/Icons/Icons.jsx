import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled('span')({
  color: (props) => props.theme.colors.body,
});

function MoonIcon() {
  return (
    <StyledIcon>
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0622 2.51001C12.2561 2.85405 12.2298 3.2799 11.9951 3.59747C11.1392 4.75534 10.7274 6.18193 10.8344 7.61779C10.9415 9.05364 11.5604 10.4034 12.5785 11.4215C13.5966 12.4396 14.9464 13.0585 16.3822 13.1656C17.8181 13.2726 19.2447 12.8608 20.4025 12.0049C20.7201 11.7702 21.1459 11.7439 21.49 11.9378C21.834 12.1317 22.0321 12.5096 21.9957 12.9028C21.8206 14.7978 21.1094 16.6037 19.9454 18.1092C18.7814 19.6147 17.2127 20.7576 15.4229 21.4041C13.633 22.0506 11.6961 22.174 9.83864 21.7598C7.98123 21.3457 6.28018 20.4111 4.93453 19.0655C3.58889 17.7198 2.65431 16.0188 2.24015 14.1614C1.82599 12.3039 1.94938 10.367 2.59589 8.57714C3.24239 6.78729 4.38527 5.21859 5.89079 4.05457C7.39631 2.89056 9.2022 2.17939 11.0972 2.00427C11.4904 1.96793 11.8683 2.16598 12.0622 2.51001ZM9.29212 4.44374C8.51302 4.72563 7.77844 5.12801 7.11646 5.63983C5.91204 6.57104 4.99774 7.82601 4.48053 9.25789C3.96333 10.6898 3.86462 12.2393 4.19594 13.7253C4.52727 15.2112 5.27494 16.572 6.35145 17.6485C7.42797 18.7251 8.78881 19.4727 10.2747 19.8041C11.7607 20.1354 13.3102 20.0367 14.7421 19.5195C16.174 19.0023 17.429 18.088 18.3602 16.8835C18.872 16.2216 19.2744 15.487 19.5563 14.7079C18.5011 15.0896 17.3693 15.2486 16.2332 15.1638C14.3187 15.0211 12.5191 14.1959 11.1616 12.8384C9.8041 11.4809 8.97893 9.68127 8.83616 7.7668C8.75144 6.63067 8.91038 5.49888 9.29212 4.44374Z"/>
      </svg>
    </StyledIcon>
  );
}

function SunIcon() {
  return (
    <StyledIcon>
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.95651C10.3191 8.95651 8.95654 10.3191 8.95654 12C8.95654 13.6809 10.3191 15.0435 12 15.0435C13.6809 15.0435 15.0435 13.6809 15.0435 12C15.0435 10.3191 13.6809 8.95651 12 8.95651ZM7.21741 12C7.21741 9.35862 9.35865 7.21738 12 7.21738C14.6414 7.21738 16.7826 9.35862 16.7826 12C16.7826 14.6413 14.6414 16.7826 12 16.7826C9.35865 16.7826 7.21741 14.6413 7.21741 12Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 2C12.4803 2 12.8696 2.38932 12.8696 2.86957V4.17391C12.8696 4.65416 12.4803 5.04348 12.0001 5.04348C11.5198 5.04348 11.1305 4.65416 11.1305 4.17391V2.86957C11.1305 2.38932 11.5198 2 12.0001 2Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 18.9565C12.4803 18.9565 12.8696 19.3458 12.8696 19.8261V21.1304C12.8696 21.6107 12.4803 22 12.0001 22C11.5198 22 11.1305 21.6107 11.1305 21.1304V19.8261C11.1305 19.3458 11.5198 18.9565 12.0001 18.9565Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.86333 4.86339C5.20292 4.52381 5.7535 4.52381 6.09308 4.86339L7.39743 6.16774C7.73702 6.50733 7.73702 7.05791 7.39743 7.39749C7.05784 7.73708 6.50727 7.73708 6.16768 7.39749L4.86333 6.09314C4.52375 5.75356 4.52375 5.20298 4.86333 4.86339Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6025 16.6025C16.9421 16.2629 17.4926 16.2629 17.8322 16.6025L19.1366 17.9069C19.4762 18.2465 19.4762 18.797 19.1366 19.1366C18.797 19.4762 18.2464 19.4762 17.9068 19.1366L16.6025 17.8323C16.2629 17.4927 16.2629 16.9421 16.6025 16.6025Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 11.5197 2.38932 11.1304 2.86957 11.1304H4.17391C4.65416 11.1304 5.04348 11.5197 5.04348 12C5.04348 12.4802 4.65416 12.8696 4.17391 12.8696H2.86957C2.38932 12.8696 2 12.4802 2 12Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9565 12C18.9565 11.5197 19.3459 11.1304 19.8261 11.1304H21.1305C21.6107 11.1304 22 11.5197 22 12C22 12.4802 21.6107 12.8696 21.1305 12.8696H19.8261C19.3459 12.8696 18.9565 12.4802 18.9565 12Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.39743 16.6025C7.73702 16.9421 7.73702 17.4927 7.39743 17.8323L6.09308 19.1366C5.7535 19.4762 5.20292 19.4762 4.86333 19.1366C4.52375 18.797 4.52375 18.2465 4.86333 17.9069L6.16768 16.6025C6.50727 16.2629 7.05784 16.2629 7.39743 16.6025Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1366 4.86339C19.4762 5.20298 19.4762 5.75356 19.1366 6.09314L17.8322 7.39749C17.4926 7.73708 16.9421 7.73708 16.6025 7.39749C16.2629 7.05791 16.2629 6.50733 16.6025 6.16774L17.9068 4.86339C18.2464 4.52381 18.797 4.52381 19.1366 4.86339Z" />
      </svg>
    </StyledIcon>
  );
}

export { MoonIcon, SunIcon };