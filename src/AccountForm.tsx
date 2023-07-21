import { FormWrapper } from "./FormWrapper";

type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export function AccountForm({
  email,
  password,
  updateFields,
}: AccountFormProps) {
  return (
    <>
      <FormWrapper title="Account Creation">
        <div className="input-group">
          <input
            autoFocus
            required
            type="email"
            className="user-input"
            name="email"
            value={email}
            onChange={(e) => updateFields({ email: e.target.value })}
          />
          <label className="input-label">E-mail</label>
        </div>
        <div className="input-group">
          <input
            required
            type="password"
            className="user-input"
            name="password"
            value={password}
            onChange={(e) => updateFields({ password: e.target.value })}
          />
          <label className="input-label">Password</label>
        </div>
      </FormWrapper>
    </>
  );
}
