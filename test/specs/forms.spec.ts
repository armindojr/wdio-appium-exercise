describe('Demo application forms component', () => {
    before(async () => {
        await $('~Forms').click();
    });

    it('should fill input with text', async () => {
        await $('~text-input').setValue('Armindo Junior');
        const inputValue = await $('~input-text-result').getText();

        expect(inputValue).toEqual('Armindo Junior');
    });
});