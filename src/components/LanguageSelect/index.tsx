import { Dropdown } from "flowbite-react";

const LanguageSelect = () => {
  return (
    <Dropdown label="English" inline dismissOnClick={false}>
      <Dropdown.Item>German</Dropdown.Item>
      <Dropdown.Item>French</Dropdown.Item>
      <Dropdown.Item>Chinese</Dropdown.Item>
      <Dropdown.Item>Russian</Dropdown.Item>
    </Dropdown>
  );
};

export default LanguageSelect;
