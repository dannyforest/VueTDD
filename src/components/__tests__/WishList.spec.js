import WishList from "@/components/WishList.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it, beforeEach } from "vitest";

describe('WishList', () => {
    let wrapper;

    beforeEach(() => {
        // Define your allBooks data here
        const allBooks = [{ id: 1, title: 'New Book' }];

        // Pass allBooks as a prop to the WishList component
        wrapper = mount(WishList, {
            props: {
                allBooks
            }
        });
    });

    describe('initial list', () => {
        it('should not have any books to begin with', () => {
            expect(wrapper.vm.wishlist).toHaveLength(0);
        });
    });

    describe('add book to wishlist', () => {
        it('should add a book to the WishList', async () => {
            await wrapper.find('button').trigger('click');
            expect(wrapper.vm.wishlist).toHaveLength(1);
        });

        it('should not add a book to the WishList if it already exists', async () => {
            // Since you're triggering click on the first button found,
            // ensure your mock data and component behavior aligns with this test logic.
            const addButton = wrapper.find('button');
            await addButton.trigger('click'); // Adds the book
            await addButton.trigger('click'); // Tries to add the same book again
            expect(wrapper.vm.wishlist).toHaveLength(1); // Length should still be 1
        });
    });

    describe('remove book from wishlist', () => {
        it('should remove the book from the wishlist if it is in the list already', async () => {
            const mockBook = { id: 1, title: 'New Book' };
            // Directly manipulate wishlist for setup, as this is internal state.
            wrapper.setData({ wishlist: [mockBook] });
            await wrapper.vm.$nextTick(); // Wait for DOM to update

            // Ensure your selector targets the correct button for removal
            // This assumes the first button found is the "remove" button, which might not always be correct.
            await wrapper.find('button').trigger('click');
            expect(wrapper.vm.wishlist).toHaveLength(0);
        });
    });
});
