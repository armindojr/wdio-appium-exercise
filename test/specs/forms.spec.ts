describe('Demo application forms component', () => {
    before(async () => {
        await $('~Forms').click();
    });

    it('should fill input with text', async () => {
        await $('~text-input').setValue('Armindo Junior');
        const inputValue = await $('~input-text-result').getText();

        expect(inputValue).toEqual('Armindo Junior');
    });

    it('should change switch state', async () => {
        await $('~switch').click();
        const inputValue = await $('~switch-text').getText();

        expect(inputValue).toContain('OFF');
    });

    it('should select option', async () => {
        let text = 'webdriver.io is awesome';

        await $('~Dropdown').click();
        await $(`//android.widget.ListView/*[@text=\'${text}\']`).click();
        const selectValue = await $('//*[@content-desc="Dropdown"]/*/android.widget.EditText').getText();

        expect(selectValue).toEqual(text);
    });
});