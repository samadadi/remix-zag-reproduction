/**
 * 
 */
import { Portal, Select } from "@ark-ui/react";
import { json, useFetcher } from "@remix-run/react";

export async function action({ request }) {
  const formData = await request.formData();

  /**
   * For this field is working fine
   */
  console.log(formData.get("intent"));

  /**
   * If you select multiple options from the select component then these outputs are `null`.
   * But if you select just one option we will get form data.
   */
  console.log(formData.get("frameworks"));
  console.log(formData.getAll("frameworks"));

  return json({ message: "successfull" });
}

/**
 * 
 */
export default function Route() {
  const fetcher = useFetcher();

  const frameworks = ["React", "Solid", "Vue"];

  return (
    <div>
      <fetcher.Form method="POST">
        <Select.Root name="frameworks" items={frameworks} multiple>
          <Select.Label>Framework</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select a Framework" />
              <Select.Indicator>
                ⯆
              </Select.Indicator>
            </Select.Trigger>
            <Select.ClearTrigger>Clear</Select.ClearTrigger>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                <Select.ItemGroup id="framework">
                  <Select.ItemGroupLabel htmlFor="framework">Frameworks</Select.ItemGroupLabel>
                  {frameworks.map((item) => (
                    <Select.Item key={item} item={item}>
                      <Select.ItemText>{item}</Select.ItemText>
                      <Select.ItemIndicator>✓</Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.ItemGroup>
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
        <button type="submit" name="intent" value="create">Submit</button>
      </fetcher.Form>
    </div>
  );
}