import { FormWrapper } from "./FormWrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) {
  return (
    <>
      <FormWrapper title="Address">
        <div className="input-group">
          <input
            autoFocus
            required
            type="text"
            className="user-input"
            value={street}
            onChange={(e) => updateFields({ street: e.target.value })}
          />
          <label className="input-label">Street</label>
        </div>
        <div className="input-group">
          <input
            required
            type="text"
            className="user-input"
            value={city}
            onChange={(e) => updateFields({ city: e.target.value })}
          />
          <label className="input-label">City</label>
        </div>
        <div className="input-group">
          <input
            required
            type="text"
            className="user-input"
            value={state}
            onChange={(e) => updateFields({ state: e.target.value })}
          />
          <label className="input-label">State</label>
        </div>
        <div className="input-group">
          <input
            required
            type="text"
            className="user-input"
            value={zip}
            onChange={(e) => updateFields({ zip: e.target.value })}
          />
          <label className="input-label">Zip</label>
        </div>
      </FormWrapper>
    </>
  );
}
