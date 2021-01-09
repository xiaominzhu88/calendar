import { useDialogState, Dialog, DialogDisclosure } from 'reakit/Dialog';

function windowJoke() {
	const dialog = useDialogState();
	return (
		<>
			<DialogDisclosure {...dialog}>Open joke</DialogDisclosure>
			<Dialog {...dialog} aria-label="joke">
				Welcome to Reakit!
			</Dialog>
		</>
	);
}
