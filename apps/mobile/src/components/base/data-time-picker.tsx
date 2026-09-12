import RNDateTimePicker, {
    type DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

type DateTimePickerMode = "date" | "time" | "datetime";

type DateTimePickerProps = {
    value: Date;
    mode?: DateTimePickerMode;
    onChange: (date: Date) => void;
    disabled?: boolean;
};

/**
 * Thin wrapper over @react-native-community/datetimepicker, exposing a
 * single onChange(date) callback instead of the library's raw
 * (event, date) signature — keeps the calling code decoupled from the
 * underlying library's API shape.
 */
export function DateTimePicker({
    value,
    mode = "date",
    onChange,
    disabled = false,
}: DateTimePickerProps) {
    function handleChange(_event: DateTimePickerEvent, selectedDate?: Date) {
        if (selectedDate) {
            onChange(selectedDate);
        }
    }

    return (
        <RNDateTimePicker
            value={value}
            mode={mode}
            onChange={handleChange}
            disabled={disabled}
        />
    );
}
