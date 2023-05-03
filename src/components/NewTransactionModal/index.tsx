import * as Dialog from "@radix-ui/react-dialog";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay />

      <Dialog.Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  )
}
