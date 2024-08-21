const url = 'http://localhost:3000/api'

export const fetchProducts = async () => {
    try {
      const response = await fetch(`${url}/products`);
      if (!response.ok) {
        throw new Error('Mạng không ổn');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Lỗi rồi:', error);
      throw error;
    }
};

// Giả sử bạn có dữ liệu sản phẩm mẫu hoặc gọi API
export const fetchProductById = async (id) => {
  // Ví dụ sử dụng fetch để gọi API
  const response = await fetch(`${url}/products/${id}`);
  const data = await response.json();
  return data;
};


export const fetchProductsByCategory = async (id) => {
  try {
    const response = await fetch(`${url}/products/categoryId/${id}`);
    if (!response.ok) {
      throw new Error('Mạng không ổn');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Lỗi rồi:', error);
    throw error;
  }
};





