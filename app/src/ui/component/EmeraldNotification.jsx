import { React } from "react";
import { Slide, Snackbar } from "@mui/material";

export function EmeraldNotification({ id, open, handleClose, message, expiresMillis }) {
	const expiresTimeMilliseconds = 6000;
	return (
		<Snackbar
			key={`notification-${id}`}
			className="emerald-notification"
			anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
			open={open}
			autoHideDuration={expiresMillis ?? expiresTimeMilliseconds}
			onClose={handleClose}
			TransitionComponent={Slide}
			message={message}
		/>
	);
}
