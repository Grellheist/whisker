export default function formatDate(dateString: string) {
    const date = new Date(dateString);
    const currentDate = new Date();

    const timeDifferenceInSeconds = Math.floor((currentDate.getTime() - date.getTime()) / 1000);

    if (timeDifferenceInSeconds < 60) {
        return `${timeDifferenceInSeconds}s`;
    } else if (timeDifferenceInSeconds < 3600) {
        const minutesPassed = Math.floor(timeDifferenceInSeconds / 60);
        return `${minutesPassed}m`;
    } else if (timeDifferenceInSeconds < 86400) {
        const minutesPassed = Math.floor(timeDifferenceInSeconds / 3600);
        return `${minutesPassed}h`;
    } else if (currentDate.getFullYear() === date.getFullYear()) {
        const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    } else {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }
}
