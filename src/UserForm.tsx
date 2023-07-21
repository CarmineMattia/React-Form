import { FormWrapper } from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {
  return (
    <>
      <FormWrapper title="User Details">
        <div className="input-group">
          <input
            autoFocus
            required
            type="text"
            className="user-input"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => updateFields({ firstName: e.target.value })}
          />
        </div>
        <div className="input-group">
          <input
            required
            type="text"
            className="user-input"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => updateFields({ lastName: e.target.value })}
          />
        </div>
        <div className="input-group">
          <input
            required
            min={1}
            type="number"
            className="user-input"
            placeholder="Age"
            value={age}
            onChange={(e) => updateFields({ age: e.target.value })}
          />
        </div>
      </FormWrapper>
    </>
  );
}
