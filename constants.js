import { toast } from 'react-toastify';

// success
export const successfullySuggestedNotify = () => toast('Twoja propozycja została wysłana!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});

export const successfullyAcceptedSong = () => toast('Pomyślnie zaakcpetowano!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});

// failed
export const failedSuggestedNotify = () => toast('Wystąpił błąd, spróbuj ponownie później!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});

export const failedAcceptedSong = () => toast('Nie udało się zaakcpetować, spróbuj ponownie później!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});