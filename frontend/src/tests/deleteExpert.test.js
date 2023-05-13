import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'
import DeleteExperts from '../components/Admin/DeleteExpert';

jest.mock('../actions', () => ({
  AllExperts: jest.fn().mockResolvedValue([
    {
      _id: '1',
      title: 'Expert 1',
      name: 'John Doe',
      designation: 'Expert Designer',
      description: 'Expert in designing',
    },
    {
      _id: '2',
      title: 'Expert 2',
      name: 'Jane Doe',
      designation: 'Expert Developer',
      description: 'Expert in developing',
    },
  ]),
  DeleteExpert: jest.fn().mockResolvedValue({
    message: 'Expert deleted successfully',
  }),
}));

describe('DeleteExperts component', () => {
  beforeEach(() => {
    render(<DeleteExperts />);
  });

  it('should render the title of the page', () => {
    const pageTitle = screen.getByText('Delete Experts');
    expect(pageTitle).toBeInTheDocument();
  });

  it('should render all the experts returned by the API', async () => {
    const expert1 = await screen.findByText((content, element) => {
      return element.tagName.toLowerCase() === 'div' && content.includes('Expert 1');
    });
    const expert2 = await screen.findByText((content, element) => {
      return element.tagName.toLowerCase() === 'div' && content.includes('Expert 2');
    });
    expect(expert1).toBeInTheDocument();
    expect(expert2).toBeInTheDocument();
  });

  it('should delete an expert when the delete button is clicked', async () => {
    const expertToDelete = { _id: '1', title: 'Expert 1', name: 'John Doe', designation: 'Expert Designer', description: 'Expert in designing' };
    const experts = [expertToDelete, { _id: '2', title: 'Expert 2', name: 'Jane Doe', designation: 'Expert Developer', description: 'Expert in developing' }];
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(experts),
    });

    render(<DeleteExperts />);

    const expertToDeleteElement = await screen.findByText(expertToDelete.title);
    const deleteButton = expertToDeleteElement.parentElement.querySelector('button');

    userEvent.click(deleteButton);

    await waitFor(() => expect(screen.queryByText(expertToDelete.title)).not.toBeInTheDocument());
    expect(global.fetch).toHaveBeenCalledWith(`/api/experts/${expertToDelete._id}`, { method: 'DELETE' });
  });
});
